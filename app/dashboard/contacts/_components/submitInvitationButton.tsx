import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitInvitationButton() {
    const { pending } = useFormStatus();

    return <Button
        className="bg-pink-500 text-white hover:bg-pink-600"
        disabled={pending}
    >
        {pending ? 'Loading...' : 'Send invitation'}
    </Button>
}