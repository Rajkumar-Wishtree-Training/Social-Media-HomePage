import { Add, EmojiEmotions, Event, Image, PersonAdd } from '@material-ui/icons'
import { styled } from '@material-ui/styles'
import { VideoCameraBack } from '@mui/icons-material'
import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const AddPost = () => {
    const [open, setOpen] = useState(false)
    const StyledModal = styled(Modal)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })
    const UserBox = styled(Box)({
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        gap: "10px",
        marginTop: 10
    });
    return (
        <>
            <Tooltip title="Delete"   sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(50% - 35px)", md: 5 } }}>
                <Fab color="primary"  aria-label="add">
                    <Add onClick={() => setOpen(true)} />
                    <StyledModal
                        open={open}
                        onClose={(e) => setOpen(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box width={400} height={400} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={2}>
                            <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
                            <UserBox>
                                <Avatar
                                    sx={{ width: "30px", height: "30px" }}
                                    alt="Remy Sharp"
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                />
                                <Typography variant="span">Rajkumar</Typography>
                            </UserBox>
                            <TextField
                                id="outlined-multiline-static"
                                label="What's on your mind"
                                multiline
                                rows={4}
                                sx={{ marginTop: 2, width: '100%' }}
                            />
                            <Stack direction='row' gap={1} mt={2} mb={3} >
                                <EmojiEmotions color='primary' />
                                <Image color='secondary' />
                                <VideoCameraBack color='success' />
                                <PersonAdd color='error' />
                            </Stack>
                            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" >
                                <Button >Post</Button>
                                <Button sx={{width : '5vmax'}}><Event/></Button>
                            </ButtonGroup>
                        </Box>
                    </StyledModal>
                </Fab>
            </Tooltip>

        </>
    )
}

export default AddPost
