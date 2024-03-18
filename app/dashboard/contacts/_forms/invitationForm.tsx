import { Input } from "@/components/ui/input";
import SubmitInvitationButton from "../_components/submitInvitationButton";
import { createContact } from "../_actions/actions";
import { TContact } from "@/types/contact";

export default function InvitationForm() {

    // METHODS
    async function onSubmit(data: FormData) {
        console.log('onSubmit');
        const firstName = data.get('firstname') as string;
        const lastName = data.get('lastname') as string;
        const email = data.get('email') as string;

        if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof email !== 'string') {
            console.log('Form not valid');
            return;
        }

        const newContact: TContact = {
            id: Math.floor(Math.random() * 1001).toString(),
            avatar: "/assets/avatar1.png",
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: "",
            type: "Undefined"
        }

        // TODO: API CALL HERE TO SEND INVITATION EMAIL
        console.log('Form valid');
        await createContact(newContact);
    }


    return <form className="col p-4 space-y-4" action={onSubmit}  >
        <div className="row space-x-4">
            <Input name="firstname" placeholder="Firstname" required={true} />
            <Input name="lastname" placeholder="Lastname" required={true} />
        </div>
        <Input name="email" placeholder="Email" required={true} />
        <SubmitInvitationButton />
    </form>

}