import './App.scss';
import {
  Input,
  FormControl,
  AppBox,
  Grid,
  InputLabel,
  ButtonPrimary,
  FormHelperText,
} from './components';

function BookMarkForm() {
  return (
    <>
      <AppBox
        title={'New Bookmark'}
        sx={{ maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="bookmarkName"
                aria-describedby="Your bookmark name"
                placeholder="Name"
              />
              <FormHelperText
                id="bookmarkNameHelperText"
                style={{ marginLeft: 0 }}
              >
                You should use a meaningful name that can memorize the link
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="bookmarkURL"
                aria-describedby="Your bookmark URL"
                placeholder="URL"
              />
              <FormHelperText
                id="bookmarkURLHelperText"
                style={{ marginLeft: 0 }}
              >
                It should be a URL that you wanna bookmark
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'right' }}>
            <ButtonPrimary>SAVE</ButtonPrimary>
          </Grid>
        </Grid>
      </AppBox>
    </>
  );
}

const App = () => (
  <>
    <BookMarkForm />
  </>
);

export default App;
