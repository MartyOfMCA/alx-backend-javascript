import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = (firstName, lastName, filename) => Promise.allSettled([
  signUpUser(firstName, lastName),
  uploadPhoto(filename),
])
  .then((response) => {
    const results = [];
    response.forEach((item) => {
      results.push({
        status: item.status,
        value: item.status === 'fulfilled' ? item.value : String(item.reason),
      });
    });
    return (results);
  });

export default handleProfileSignup;
