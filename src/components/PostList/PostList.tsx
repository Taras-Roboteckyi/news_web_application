import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { ItemsSelectors, /* fetchContacts, */ deleteContacts } from '../../redux/items';
import { fetchPosts } from '../../redux/items';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* import ContactListItem from './PostListItem/PostListItem'; */

import { ListStyle } from './PostList.styled';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

function generate(element: React.ReactElement) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const PostList = () => {
  const data = useSelector(ItemsSelectors.getItems);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  /* const data = useSelector(state => state.items); */
  /* console.log(data); */

  useEffect(() => {
    /*  dispatch(fetchPosts(page)); */
  }, [dispatch, page]);

  const skipPage = 10;

  /*  const onDeleteItems = id => dispatch(deleteContacts(id)); */

  const handleClickLoadMore = () => setPage(prevPage => prevPage + skipPage);

  return (
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Avatar with text and icon
      </Typography>
      <Demo>
        <List dense={dense}>
          {generate(
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>,
          )}
        </List>
      </Demo>
    </Grid>
  );
};

export default PostList;

/* <ListStyle>
      {data.map(({ name, id number  }) => {
        return (
          <ContactListItem
            key={id}
            data={{ number, name, id }}
            onDeleteContact={() => {
              toast.error('Sorry you deleted the contact!', {
                position: toast.POSITION.TOP_CENTER,
              });
               onDeleteItems(id);
            }}
            onButtomLoadMore={handleClickLoadMore}
          />
        );
      })}
    </ListStyle> */
