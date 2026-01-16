export default function Page({ todoData }) {

  return (
    <main>
      {todoData && todoData.length > 0 ? todoData.map((item,index)=><p key={index}>{item}</p> )
      : <p>nothing for today</p>
    
    
     // end cof map
    
    }

    </main>
  );

}