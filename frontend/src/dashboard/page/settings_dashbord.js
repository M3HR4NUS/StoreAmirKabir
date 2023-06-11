import React, { useState,useEffect } from "react";
import Navbars from "../../dashboard/components/Navbar/Navbar";
import Sidebar_dashbord from "../../dashboard/components/Sidebars/Sidebar_dashbord";
import Table from 'react-bootstrap/Table';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';

import axios from "axios";
//CSS 
import '../global.css'

export default function Settings_dashbord() {
  const [catgory,setCatgory] = useState('')
  const addcatgory = ()=>{
  }
 
  useEffect(()=>{
    async function send(){
      await axios.post('http://localhost:5000/admin/setCat',{
        titel:'slam'
      })
    }
  },[])
  // const inputCat = (e) =>{
  //   setCatgory(e.target.value)
  //   console.log(e.target.value);
  // }


    return (
        <>
          <Navbars />
          <div className="grid grid-rows-1 grid-cols-12">
            <div className="col-span-2">
              <Sidebar_dashbord />
            </div>
            <div className="col-span-10">
              <h1 className="font-medium my-4">تنظیمات</h1>
              <div>
                <div className="bg-white m-2 p-4 h-screen rounded shadow-current">
                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>دسته بندی</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="grid grid-rows-1 gap-4 grid-cols-2">
            <div>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
      </tbody>
    </Table>
            </div>
            <div>
              <p className="font-light pb-0">اضافه کردن دسته :</p>
              <TextField id="standard-basic"  className="w-full" variant="standard" name="titel" onChange={inputCat} />
              <button className="w-1/2 py-1 rounded mt-4 shadow-sm bg-green-800 text-white" onClick={send}>ذخیره</button>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>کاربر</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>تنظیمات وبلاگ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>دسته بندی محصولات</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="grid grid-rows-1 gap-4 grid-cols-2">
            <div>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
      </tbody>
    </Table>
            </div>
            <div>
              <p className="font-light pb-0">اضافه کردن دسته :</p>
              <TextField id="standard-basic"  className="w-full" variant="standard" />
              <button className="w-1/2 py-1 rounded mt-4 shadow-sm bg-green-800 text-white">ذخیره</button>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
                </div>
    </div>
            </div>
          </div>
        </>
      );
}
