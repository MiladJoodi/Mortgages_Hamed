import MortgageLoanForm from '@/components/apply4/MortgageLoanForm';
import { Toaster } from 'react-hot-toast'

const page = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <MortgageLoanForm />
      <Toaster position="top-right" />
    </div>
  );
};

export default page;
