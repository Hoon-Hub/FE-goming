

//임시데이터
const testData = [
  {
    index: 124156,
    date: "2023-04-07",
    qc: 'exploration',   //나의탐구
    q: '질문입니다?질문입니다?질문입니다?질문입니다?질문입니다?',
    a: '답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?'
  },
  {
    index: 1241576,
    date: "2023-04-17",
    qc: 'daily',          //나의일상
    q: '질문입니다?',
    a: '답변입니다?'
  },
  {
    index: 1241596,
    date: "2023-04-09",
    qc: 'preferences',   //나의취향
    q: '질문입니다?',
    a: '답변입니다?'
  },
  {
    index: 12423156,
    date: "2023-04-18",
    qc: 'memory',         //나의기억1
    q: '질문입니다?',
    a: '답변입니다?'
  },
  {
    index: 18514,
    date: "2023-04-18",
    qc: 'memory',         //나의기억2
    q: '질문입니다?2',
    a: `답변 내용을 기입 합니다. 
오늘의 난이도는 10이지 않을까요.. 
잔생각이 많기도 하고 쉽지 않은 하루 였던 것 같습니다. 이게 몇 줄 까지 보여지는게 가장 좋을지..이게 100자.
답변 내용을 기입 합니다. 
오늘의 난이도는 10이지 않을까요.. 잔생각이 많기도 하고 쉽지 않은 하루 였던 것 같습니다. 이게 몇 줄 까지 보여지는게 가장 좋을지..이게 100자.
답변 내용을 기입 합니다. 
오늘의 난이도는 10이지 않을까요.. 답변 내용을 기입 합니다. 
오늘의 난이도는 10이지 않을까요.. 
잔생각이 많기도 하고 쉽지 않은 하루 였던 것 같습니다. 이게 몇 줄 까지 보여지는게 가장 좋을지..이게 100자.
답변 내용을 기입 합니다. 
오늘의 난이도는 10이지 않을까요.. 잔생각이 많기도 하고 쉽지 않은 하루 였던 것 같습니다. 이게 몇 줄 까지 보여지는게 가장 좋을지..이게 100자.
답변 내용을 기입 합니다. 
오늘의 난이도는 10이지 않을까요.. `
  },
  {
    index: 1224156,
    date: "2023-04-20",
    qc: 'wish',           //나의꿈
    q: '질문입니다?',
    a: `답변 내용을 기입 합니다. 
      오늘의 난이도는 10이지 않을까요.. 
      잔생각이 많기도 하고 쉽지 않은 하루 였던 것 같습니다. 이게 몇 줄 까지 보여지는게 가장 좋을지..이게 100자.
      답변 내용을 기입 합니다. 
      오늘의 난이도는 10이지 않을까요.. 잔생각이 많기도 하고 쉽지 않은 하루 였던 것 같습니다. 이게 몇 줄 까지 보여지는게 가장 좋을지..이게 100자.
      답변 내용을 기입 합니다. 
      오늘의 난이도는 10이지 않을까요.. 
    `
  },
  {
    index: 12486,
    date: "2023-04-07",
    qc: 'exploration',   //나의탐구
    q: '질문입니다?질문입니다?질문입니다?질문입니다?질문입니다?',
    a: '답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?'
  },
  {
    index: 1956,
    date: "2023-04-07",
    qc: 'exploration',   //나의탐구
    q: '질문입니다?질문입니다?질문입니다?질문입니다?질문입니다?',
    a: '답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?'
  },
  {
    index: 12415216,
    date: "2023-04-07",
    qc: 'exploration',   //나의탐구
    q: '질문입니다?질문입니다?질문입니다?질문입니다?질문입니다?',
    a: '답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?'
  },
  {
    index: 56,
    date: "2023-04-07",
    qc: 'exploration',   //나의탐구
    q: '질문입니다?질문입니다?질문입니다?질문입니다?질문입니다?',
    a: '답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?'
  },
  {
    index: 156,
    date: "2023-04-07",
    qc: 'exploration',   //나의탐구
    q: '질문입니다?질문입니다?질문입니다?질문입니다?질문입니다?',
    a: '답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?'
  },
  {
    index: 124,
    date: "2023-04-07",
    qc: 'exploration',   //나의탐구
    q: '질문입니다?질문입니다?질문입니다?질문입니다?질문입니다?',
    a: '답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?답변입니다?'
  },

]

const testData2 = [
  { date: '2023-04-20', count: 1 },
  { date: '2023-04-17', count: 3 },
  { date: '2023-04-10', count: 1 },
  { date: '2023-04-09', count: 2 },
  { date: '2023-04-04', count: 3 },
  { date: '2023-04-01', count: 2 },
  { date: '2023-04-07', count: 3 },
]

export {testData, testData2}