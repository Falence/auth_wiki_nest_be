import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { MongoRepository } from 'typeorm';
import { ContactUsDto } from './dtos/contact-us.dto';
import { getContactUsEmailTemplate } from './email-templates/welcome.email';
import { Contact } from './entities/contact-us.entities';

@Injectable()
export class EmailService {
  constructor(
    private mailService: MailerService,
    @InjectRepository(Contact)
    private contactUsRepository: MongoRepository<Contact>,
  ) {}

  async sendEmail(
    user: User | Contact,
    subject: string,
    html: string,
    text: string,
  ) {
    try {
      await this.mailService.sendMail({
        from: 'Auth Wiki Team 10',
        to: user.email,
        subject,
        text,
        html,
      });
      return 'success';
    } catch (error) {
      console.log(error);
      return 'fail';
    }
  }

  async contactUs(contact: ContactUsDto): Promise<void> {
    let newContact = new Contact(contact.name, contact.email, contact.message);
    newContact = await this.contactUsRepository.save(newContact);
    await this.sendEmail(
      newContact,
      'Thanks for getting in touch',
      getContactUsEmailTemplate(newContact).html,
      getContactUsEmailTemplate(newContact).text,
    );
    return;
  }

  private capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
