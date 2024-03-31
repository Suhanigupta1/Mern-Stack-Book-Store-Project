import React from 'react';
import { useState } from 'react';
import {url} from "../api_url"
import { BackButton } from '../components/BackButton';
import Spinner from '../components/spinner';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSnackbar } from 'notistack';
const EditBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [loading, setLoading] = useState("");
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();
    const {id} = useParams();
    useEffect(()=>{
        setLoading(true);
        axios.get(`${url}/books/${id}`)
        .then((response)=>{
            setAuthor(response.data.data.author);
            setPublishYear(response.data.data.publishYear);
            setTitle(response.data.data.title);
            setLoading(false);
            
        }).catch((error)=>{
            setLoading(false);
            alert('An error happend. please check console');
            console.log(error);
        })
        return setAuthor('');
        setPublishYear('');
        setTitle('');
    }, []);
    const handleEditBook =()=>{
        const data = {
            title, 
            author, 
            publishYear
        };
        setLoading(true);
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/books/${id}`, data)
        .then(()=>{
            setLoading(false);
            enqueueSnackbar('Book Edited Successfully', {variant: 'success'});
            navigate('/');
        })
        .catch((error)=>{
        setLoading(false);
        enqueueSnackbar('Error', {variant: 'error'});
        console.log(error);
        })
    };
    return (
    <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'>Edit Book</h1>
        {loading ? <Spinner/> :''}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto' >
            <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input type='text' value={title} 
            onChange={(e)=>setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
            </div>
            <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input type='text' value={author} 
            onChange={(e)=>setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
            </div>
            <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
            <input type='number' value={publishYear} 
            onChange={(e)=>setPublishYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
            </div>

            <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook} >
            Save
            </button> 
        </div>
        

    </div>
  )
}

export default EditBook;
