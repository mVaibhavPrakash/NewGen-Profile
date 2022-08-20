import axios from 'axios'

const EditProfile = (obj, setStatus) => {
  let socials = {
    twitter: obj.twitter,
    linkedin: obj.linkedin,
    stackoverflow: obj.stackoverflow,
    github: obj.github,
    personal: obj.personal,
    youtube: obj.youtube,
  }

  obj.socials = socials
  delete obj.twitter
  delete obj.linkedin
  delete obj.stack
  delete obj.github
  delete obj.personal
  delete obj.youtube

  axios
    .post({
      method: 'POST',
      url: '/profile/post',
      data: obj,
    })
    .then((res) => {
      setStatus('Saved')
      if (res.status === 200) {
        setStatus('Saved')
        const time = setTimeout(() => {
          setStatus('Edit')
        }, 500)
        clearTimeout(time)
      } else {
        setStatus('Try Again')
        const time = setTimeout(() => {
          setStatus('Edit')
        }, 500)
        clearTimeout(time)
      }
    })
}

export default EditProfile
