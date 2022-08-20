import axios from 'axios'

export const getProfileData = (
  dispatch,
  dispatc,
  User,
  setProfile,
  navigate,
  setProfileError
) => {
  axios
    .get({
      method: 'GET',
      url: '/profile/get',
      data: User.uid_person,
    })
    .then((res) => {
      if (res.status === 200) {
        const array = res.socials.split(',')
        dispatc(
          setProfile({
            fullname: res.fullname,
            username: res.username,
            bio: res.bio,
            dateofbirth: res.dateofbirth,
            about: res.about,
            tech: res.tech,
            twitter: array[0],
            linkedin: array[1],
            stackoverflow: array[2],
            github: array[3],
            personal: array[4],
            youtube: array[5],
          })
        )
        dispatch({ type: 'set fullname', payload: res.fullname })
        dispatch({ type: 'set username', payload: res.username })
        dispatch({ type: 'set bio', payload: res.bio })
        dispatch({ type: 'set dob', payload: res.dateofbirth })
        dispatch({ type: 'set about', payload: res.about })
        dispatch({ type: 'set tech', payload: res.tech })
        dispatch({ type: 'set twitter', payload: res.twitter })
        dispatch({ type: 'set linkedin', payload: res.linkedin })
        dispatch({ type: 'set stack', payload: res.stack })
        dispatch({ type: 'set github', payload: res.github })
        dispatch({ type: 'set personal', payload: res.personal })
        dispatch({ type: 'set youtube', payload: res.youtube })
      } else {
        dispatc(
          setProfileError({
            error: 'An internal error occurred, please again after sometime',
          })
        )
        const time = setTimeout(() => {
          clearTimeout(time)
          navigate('/')
        }, 500)
      }
    })
}
