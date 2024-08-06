import { Grid } from '@mui/material'
import ContactForm from '../../components/Contacts/ContactForm'
import ContactInformation from '../../components/Contacts/ContactInformation'

const Contact = () => {
    return (
        <Grid
            container
            spacing={2}
            display={'flex'}
            alignItems={'center'}
            columns={12}
            sx={{ marginTop: '2rem', minHeight: '70vh' }}
        >
            <Grid item xs={12} sm={5}>
                <ContactInformation />
            </Grid>

            <Grid item xs={12} sm={7}>
                <ContactForm />
            </Grid>
        </Grid>
    )
}

export default Contact
