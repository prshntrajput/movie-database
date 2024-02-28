import React from 'react'
import axios from "axios";

const instance =  axios.create({
    baseURL:"https://api.themoviedb.org/3/",
     headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGJmYTg0MGE5YjcyOTQ1MzczYmY1Mzg2NjU3MGJkNiIsInN1YiI6IjY1ZDUyMGVkZjI5ZDY2MDE3ZGU4NmU2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DX87uWJ8XKdYT65xEkKE06zLT7IWxovWJ-x3w6aKp5U',
  },
})

export default instance;