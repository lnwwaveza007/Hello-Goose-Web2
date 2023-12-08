import React from 'react'


const Connect = (props: any) => {
    const {Link,ConnectWith} = props;
    return (
   <>
    <button className="border border-black rounded-2xl flex items-center   gap-28  bg-white h-16 w-3/5" >
      
    <div className="pl-3"><img className="w-8 " src={Link} alt="" /></div>
    <div><a>Connect With {ConnectWith}</a></div>
    
      
    
    
    
    </button>
    
   
   </>
  )
}

export default Connect