import { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'

const index = () => {
    return (
        <div>indexing harusnya</div>
    )
}


index.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default index