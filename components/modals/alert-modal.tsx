import { useEffect, useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Are you Sure?"
        description="This action cannot be undone."
      >
        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
          <Button disabled={loading} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" disabled={loading} onClick={onConfirm}>
            Continue
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AlertModal;
