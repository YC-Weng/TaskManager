tasks = [
    {
      title: '搬東西',
      startTime:'2023-7-25 12:00:00',
      endTime: '2023-7-25 16:00:00',
      reward: '2000',
      remarks: ''
    },
    {
      title: '買咖啡買咖啡買咖啡',
      startTime:'2023-7-26 12:00:00',
      endTime: '2023-7-26 18:00:00',
      reward: '100',
      remarks: ''
    },
    {
      title: '買咖啡',
      startTime:'2023-7-26 12:00:00',
      endTime: '2023-7-26 18:00:00',
      reward: '100',
      remarks: ''
    },
    {
      title: '買咖啡',
      startTime:'2023-7-26 12:00:00',
      endTime: '2023-7-26 18:00:00',
      reward: '100',
      remarks: ''
    },{
      title: '搬東西',
      startTime:'2023-7-26 12:00:00',
      endTime: '2023-7-26 18:00:00',
      reward: '1000',
      remarks: ''
    }
  ];
  
  export const get_my_tasks_list = (userid , mode) => {
    return new Promise((res,rej) => {
        setTimeout(() => {res(_get_my_tasks())}, 500)
    }) 
  }
  
  const _get_my_tasks = () => {
     return tasks;
  }