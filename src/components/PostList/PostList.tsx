import * as React from 'react';
/* import { useSelector, useDispatch } from 'react-redux'; */
import { useEffect, useState /* , useRef  */ } from 'react';

import { PostsSelectors, fetchPosts, deletePosts } from '../../redux/posts';
/* import { fetchPosts, deletePosts } from '../../redux/posts'; */

import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* import ContactListItem from './PostListItem/PostListItem'; */

import { Basic } from './PostList.styled';

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
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

const PostList = () => {
  const dispatch = useAppDispatch();
  /*  const nameUser = useSelector(authSelectors.getUserName); */
  const data = useAppSelector(PostsSelectors.getPosts);
  /* const data = useSelector(PostsSelectors.getPosts); */
  /*  const dispatch = useDispatch(); */
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false); //mui state
  /* const [dense, setDense] = useState(false); */ //mui state
  /* const [secondary, setSecondary] = useState(false); */ //mui state
  /*  console.log('secondary', secondary); */
  /* const data = useSelector(state => state.items); */
  /* console.log(data); */
  const skipPage = 10;
  const dataLimit = data.length > 0 && data.length < 150;

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);

  /* const generate = (element: React.ReactElement) => {
    return data.map(({ id, body }) =>
      React.cloneElement(element, {
        key: id,
        primary: body,
      }),
    );
  }; */
  /* console.log('generate', generate); */

  const onDeletePosts = id => {
    dispatch(deletePosts(id));

    toast.error('Sorry you deleted the contact!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  console.log('data.length', data.length);
  console.log('data', data);

  const handleClickLoadMore = () => {
    setLoading(true);
    setPage(prevPage => prevPage + skipPage);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Basic>
      <Grid item xs={12} md={6}>
        {data.length > 0 ? (
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            List of latest news
          </Typography>
        ) : (
          <Typography sx={{ mt: 4, mb: 2, color: 'red' }} variant="h6" component="div">
            Sorry, you deleted all posts
          </Typography>
        )}

        <List
          sx={{
            pt: 0,
          }}
        >
          {data.map(({ id, body }, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  border: '1px solid',
                  borderRadius: 2,
                  borderColor: '#f6f6f6',
                  mb: 2,
                  bgcolor: '#f6f6f6',
                  boxShadow: 2,
                  '&:hover': {
                    backgroundColor: 'rgb(7, 177, 77, 0.42)',
                    borderColor: 'rgb(7, 177, 77, 0.42)',
                    fontSize: 24,
                  },
                }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    sx={{
                      '&:hover': {
                        backgroundColor: '#ee6b6e',
                      },
                    }}
                    onClick={() => {
                      onDeletePosts(id);
                    }}
                  >
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
                  id={id}
                  primary={body}

                  /* secondary={secondary ? 'Secondary text' : null} */
                />
              </ListItem>
            );
          })}
        </List>
        {dataLimit && (
          <LoadingButton onClick={handleClickLoadMore} loading={loading} variant="contained">
            <span>Load more</span>
          </LoadingButton>
        )}
      </Grid>
    </Basic>
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
