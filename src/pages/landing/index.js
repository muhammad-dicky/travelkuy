import { Box, Container } from '@mui/material'
import { Grid, Text } from 'mdi-material-ui'
import { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
// import Grid from '@mui/material/Grid'; // Grid version 1

const index = () => {
    return (
        <Container>
            {/* grid system not working*/}
        </Container>
    )
}


index.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default index