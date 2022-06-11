import axios from 'axios'

const EditProfile = (obj, setStatus) => {
  axios
    .post({
      method: 'POST',
      url: '/signup',
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
