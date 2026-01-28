import SuccessDialog from "./SuccessDialog";
import PrivacyPolicyDialog from "./PrivacyPolicyDialog";
import OfferAgreementDialog from "./OfferAgreementDialog";

interface PolicyDialogsProps {
  showSuccess: boolean;
  setShowSuccess: (val: boolean) => void;
  showPrivacy: boolean;
  setShowPrivacy: (val: boolean) => void;
  showOffer: boolean;
  setShowOffer: (val: boolean) => void;
}

const PolicyDialogs = ({
  showSuccess,
  setShowSuccess,
  showPrivacy,
  setShowPrivacy,
  showOffer,
  setShowOffer,
}: PolicyDialogsProps) => {
  return (
    <>
      <SuccessDialog open={showSuccess} onOpenChange={setShowSuccess} />
      <PrivacyPolicyDialog open={showPrivacy} onOpenChange={setShowPrivacy} />
      <OfferAgreementDialog open={showOffer} onOpenChange={setShowOffer} />
    </>
  );
};

export default PolicyDialogs;
