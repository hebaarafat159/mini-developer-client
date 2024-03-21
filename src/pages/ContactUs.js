import React,{ useState } from 'react'
import { Card, Stack, Typography, FormControl, FormLabel, Button, Input } from '@mui/material'
import { SocialIcon } from 'react-social-icons'
import cssStyle from '../css/styles.module.css'

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function submit() {
        //TODO handle send message
    }
    return (
        <Stack direction="row" spacing={2} className={cssStyle.page_content_dark} >
            <Card className={cssStyle.page_content}>
                <Stack spacing={1} sx={{ flexGrow: 1 }}>

                    <Typography style={{ fontWeight: 'bold', fontSize: '2vw', color: '#ed7d45', padding: '2vmin 0' }}> GET IN TOUCH</Typography>

                    {/* facebook */}
                    <Stack direction="row" spacing={2}
                        style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center' }}>
                        <SocialIcon network="facebook" url='https://www.facebook.com/MiniDeveloperUK' />
                        <a className={cssStyle.link_text} href='https://www.facebook.com/MiniDeveloperUK' target="_blank" rel="noopener noreferrer">MiniDeveloperUK</a>
                    </Stack>

                    <Stack direction="row" spacing={2}
                        style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center' }}>
                        <SocialIcon network="whatsapp" url='https://api.whatsapp.com/send?phone=+447851496016' />
                        <a className={cssStyle.link_text} href='https://api.whatsapp.com/send?phone=+447851496016' target="_blank" rel="noopener noreferrer">+447851496016</a>
                    </Stack>

                    {/* instagram */}
                    <Stack direction="row" spacing={2}
                        style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center' }}>
                        <SocialIcon network="instagram" url='https://www.instagram.com/minideveloperuk' />
                        <a className={cssStyle.link_text} href='https://www.instagram.com/minideveloperuk' target="_blank" rel="noopener noreferrer">@minideveloperuk</a>
                    </Stack>

                    {/* Email */}
                    <Stack direction="row" spacing={2}
                        style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center' }}>
                        <SocialIcon network="email" url='mailto:mini.developer.info@gmail.com' />
                        <a className={cssStyle.link_text} href='mailto:mini.developer.info@gmail.com' target="_blank" rel="noopener noreferrer">mini.developer.info@gmail.com</a>
                    </Stack>

                    {/* location */}
                    <Stack direction="row" spacing={2}
                        style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center' }}>
                        <SocialIcon network="email" url='mailto:mini.developer.info@gmail.com' />
                        <p className={cssStyle.link_text} >Castlebar Rd, Ealing W5 2UP
                            London, UK</p>
                    </Stack>
                </Stack>
            </Card>

            <Stack spacing={1} className={cssStyle.page_content} margin={'10%'}>
                <Typography style={{ fontWeight: 'bold', fontSize: '1.5vw', color: '#ed7d45' }}> Send to Us</Typography>

                <form onSubmit={submit} >
                    <Stack
                        direction="column"
                        spacing={2} >
                        {/* Name */}
                        <FormControl required>
                            <FormLabel>Name</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </FormControl>

                        {/* Email */}
                        <FormControl required>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>

                        {/* Phone */}
                        <FormControl required>
                            <FormLabel>Phone</FormLabel>
                            <Input
                                type='phone'
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                        </FormControl>

                        {/* Subject */}
                        <FormControl required>
                            <FormLabel>Subject</FormLabel>
                            <Input
                                type='text'
                                name="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)} />
                        </FormControl>
                        {/* Message */}
                        <FormControl required>
                            <FormLabel>Message</FormLabel>
                            <Input
                                type='text'
                                name="message"
                                maxRows={3}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} />
                        </FormControl>
                        <Stack gap={4} sx={{ mt: 2 }}>
                            <Button type="submit" fullWidth>
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </form>

            </Stack>

        </Stack>
    )
}