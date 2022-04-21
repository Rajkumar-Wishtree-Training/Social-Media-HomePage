import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      bgcolor="lightblue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block"  } }}
    >
      <Box position="sticky" top='0' width="100%" >
        <Typography
          variant="h6"
          fontWeight="100"
          textAlign="center"
          fontSize="2vmax"
        >
          Online Friends
        </Typography>
        <AvatarGroup
          max={5}
          sx={{ marginTop: 2, width: "fit-content", margin: "auto",mb:2 }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://ak.picdn.net/offset/photos/5fedeaaa6f52af4409f03543/medium/offset_1068108.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://cloudfront.penguin.co.in/wp-content/uploads/2018/06/Indian-Instincts_Header-scaled.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://assets.vccircle.com/uploads/2017/06/nitin-potar-8101.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FSeries%2F2020-07-South-Indian-Chritra-Agrawal%2FChitra%20Portraits%2F2020-07-chitra-agrawal-4229"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.guim.co.uk/img/media/4fd19b918068e925813d3b1deef4d78aab1d5d5a/0_69_3500_2099/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=74aa20c26ab0bcdaa151cc9e340c3de9"
          />
        </AvatarGroup>
        <Typography
          variant="h6"
          fontWeight="100"
          textAlign="center"
          fontSize="2vmax"
          marginBottom="2px"
        >
          Latest Photos
        </Typography>
        <ImageList
          cols={3}
          rowHeight={100}
          gap={3}
          sx={{ overflow: "hidden", m: "auto" , mb:3 }}
        >
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1650421495080-1bb7abafa037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
              alt="imagesss"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1644982654072-0b42e6636821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="imagesss"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1650381288051-9aece1b804bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="imagesss"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1644982647531-daff2c7383f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="imagesss"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="imagesss"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1647788738100-e138bf960f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="imagesss"
            />
          </ImageListItem>
        </ImageList>
        <Typography
          variant="h6"
          fontWeight="100"
          textAlign="center"
          fontSize="2vmax"
          marginBottom="0"
        >
          Latest Chats
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360}}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1650381288051-9aece1b804bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1650421495080-1bb7abafa037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1647788738100-e138bf960f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
