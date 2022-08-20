import { useReducer } from 'react'

const intialValue = {
  fullname: '',
  username: '',
  bio: '',
  dateofbirth: '',
  about: '',
  tech:'',
  twitter: '',
  linkedin: '',
  stack: '',
  github: '',
  personal: '',
  youtube: '',
}

const reduce = (state, action) => {
  switch (action.type) {
    case 'set fullname':
      return { ...state, fullname: action.payload }
    case 'set username':
      return { ...state, username: action.payload }
    case 'set bio':
      return { ...state, bio: action.payload }
    case 'set email':
      return {...state,email:action.payload}
    case 'set dob':
      return { ...state, dateofbirth: action.payload }
    case 'set about':
      return { ...state, about: action.payload }
      case 'set tech':
        return { ...state, tech: action.payload }
    case 'set twitter':
      return { ...state, twitter: action.payload }
    case 'set linkedin':
      return { ...state, linkedin: action.payload }
    case 'set stack':
      return { ...state, stack: action.payload }
    case 'set github':
      return { ...state, github: action.payload }
    case 'set personal':
      return { ...state, personal: action.payload }
    case 'set youtube':
      return { ...state, youtube: action.payload }
    default:
      return state
  }
}

export const Reducer = () => {
  const [state, dispatch] = useReducer(reduce, intialValue)
  return [state, dispatch]
}
