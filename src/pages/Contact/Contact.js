import { Grid } from '@mui/material'
import ContactForm from '../../components/Contacts/ContactForm'
import ContactInformation from '../../components/Contacts/ContactInformation'

const Contact = () => {
    return (
        <Grid container spacing={2} columns={12} sx={{ marginTop: '2rem' }}>
            <Grid item xs={5}>
                <ContactInformation />
            </Grid>

            <Grid item xs={7}>
                <ContactForm />
            </Grid>
        </Grid>
    )
}

export default Contact
