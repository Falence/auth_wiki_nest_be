import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/user.entity';

@Injectable()
export class EmailService {
  constructor(private mailService: MailerService) {}

  async sendEmail(user: User) {
    try {
      await this.mailService.sendMail({
        from: 'Auth Wiki Team 10',
        to: user.email,
        subject: `Welcome to The Auth Wiki Platform`,
        text: `Hello ${
          user.name.split(' ')[0]
        }, We are glad to have you on board.\nYou have successful created an acount with us. We are hoping you make the most out of our platform as we provide you with already test code to ease your life as a developer.\n\nRegards, Auth Wiki Team 10 Support.`,
        html: `
          <h1>Welcome to The Auth Wiki platform.</h1>
          <p>Hello, ${user.name}. We are glad to have you on board.</p>
          <p>You have successful created an acount with us. We are hoping you make the most out of our platform as we provide you with already test code to ease your life as a developer.</p>
          <br>
          <p>Regards, Auth Wiki Team 10 Support.</p>
        `,
      });
      return 'success';
    } catch (error) {
      console.log(error);
      return 'fail';
    }
  }

  private capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
