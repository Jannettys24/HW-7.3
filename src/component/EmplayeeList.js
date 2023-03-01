import React from 'react' 
import EmployeeListItem from './EmployeeListItem';

function EmplayeeList() {
  return (
    <div className='employeelist'><EmployeeListItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVlkEiGesri_9NkUNNOvh0ZnmHSWbkMxs_g&usqp=CAU" name='James King' position='President and CEO'/> 
    <EmployeeListItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSun1B4Xq0Pih_bTJ48Yl6Fx4g0cqjPp4ug&usqp=CAU" name='Julie Taylor' position='VP of Marketing'/>
    <EmployeeListItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXHa_ZRnKHtGCF0wkd5U8GgL7fuHvzAluRA&usqp=CAU" name='Eugene Lee' position='CFO'/>
    <EmployeeListItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXHa_ZRnKHtGCF0wkd5U8GgL7fuHvzAluRA&usqp=CAU" name='John Williams' position='VP of Engineering'/>
    <EmployeeListItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7a2bSi4Acns5ddcyOl8_CsUOqbJtJRSPH9kgvtm025kOaBi8GHStvuY51B4B0G13ZEY0&usqp=CAU" name='Ray Moore' position='VP of Sales'/>
    <EmployeeListItem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7a2bSi4Acns5ddcyOl8_CsUOqbJtJRSPH9kgvtm025kOaBi8GHStvuY51B4B0G13ZEY0&usqp=CAU" name='Paula Jones' position='QA Manager'/></div>
  )
}

export default EmplayeeList