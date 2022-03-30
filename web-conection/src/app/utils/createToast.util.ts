import { ToastController } from '@ionic/angular';
export interface IToastData {
  duration?: number;
  message: string;
  color?: string;
  position?: 'bottom' | 'top' | 'middle';
}
export class CreateToast {
  private toastController = new ToastController();
  public async create(toastData: IToastData): Promise<void> {
    const { message, color, position, duration,  } = toastData;
    const toast = await this.toastController.create({
      message,
      duration: duration > 0 ? duration : 3000,
      position: position || 'bottom',
      animated: true,
      color: color || 'primary',
    });
    toast.present();
  }
}
