import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (val: boolean) => void;
}

const SuccessDialog = ({ open, onOpenChange }: SuccessDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-synergy-dark border-synergy-red border-4 max-w-md text-center">
        <div className="py-8 px-4 space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-synergy-red flex items-center justify-center animate-bounce">
              <Icon name="CheckCircle" size={48} className="text-synergy-beige" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl font-black text-synergy-beige uppercase">
              ВАША ЗАЯВКА ПРИНЯТА
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-synergy-red">
              Спасибо БРО
            </p>
          </div>
          <Button
            onClick={() => onOpenChange(false)}
            className="w-full bg-synergy-red text-synergy-beige hover:bg-synergy-red/90 font-bold uppercase text-lg py-6 mt-6"
          >
            Закрыть
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
