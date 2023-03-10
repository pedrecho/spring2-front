import * as React from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Cargo} from "./cargo-traffic";

export function CreateCargo(){
    const [cargos, setCargos] = React.useState<Cargo>({
        id: 0,
        name: '',
        content: '',
        cityFrom: '',
        cityTo: '',
        dateFrom: '',
        dateTo: ''
    })

    const redirect = useNavigate()

    const addCargo= ()=>{
        const res = axios({
            method: 'post',
                url: 'http://localhost:8080/cargo',
                data: cargos,
                headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem('token')}` },

        })
        res.then((res) => {
            redirect('/cargo-traffic')
        }).catch((e) => redirect('/auth'))
    }

    return(
        <div className={'ml-4 mt-4 flex flex-col w-[200px] h-[300px]'}>
            <label>Название:</label>
            <input className={'border-2 rounded-md'} value={cargos.name} onChange={(e) => setCargos({...cargos, name: e.target.value})}/><br/>
            <label>Содержимое:</label>
            <input className={'border-2 rounded-md'} value={cargos.content} onChange={(e) => setCargos({...cargos, content: e.target.value})}/><br/>
            <label>Город отправки:</label>
            <input className={'border-2 rounded-md'} value={cargos.cityFrom} onChange={(e) => setCargos({...cargos, cityFrom: e.target.value})}/><br/>
            <label>Город прибытия:</label>
            <input className={'border-2 rounded-md'} value={cargos.cityTo} onChange={(e) => setCargos({...cargos, cityTo: e.target.value})}/><br/>
            <label>Дата отправки:</label>
            <input className={'border-2 rounded-md'} value={cargos.dateFrom} onChange={(e) => setCargos({...cargos, dateFrom: e.target.value})}/><br/>
            <label>Дата прибытия:</label>
            <input className={'border-2 rounded-md'} value={cargos.dateTo} onChange={(e) => setCargos({...cargos, dateTo: e.target.value})}/><br/>
            <button onClick={addCargo}>Добавить груз</button><br/>
        </div>
    )
}