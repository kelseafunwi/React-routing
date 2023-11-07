import { Form, useNavigation } from "react-router-dom"

export default function NewProjectForm() {
    const navigation = useNavigation();
    const busy = navigation.state === 'submitting';
    return (
        <Form action="/project">
            <fieldset disabled={busy}>
                <label>
                    Project title
                    <br />
                    <input type="text" name="title" />
                </label>
            </fieldset>
        </Form>
    )
}
