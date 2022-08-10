import { useState, useEffect, useCallback } from 'react';
import styles from './index.less';
import json0 from '@/assets/0';
import json1 from '@/assets/1';
import json2 from '@/assets/2';
import json3 from '@/assets/3';
import json4 from '@/assets/4';
import json5 from '@/assets/5';
import json6 from '@/assets/6';
import json7 from '@/assets/7';
import json8 from '@/assets/8';
import json9 from '@/assets/9';
import json10 from '@/assets/10';
import json11 from '@/assets/11';
import json12 from '@/assets/12';
import json13 from '@/assets/13';
import json14 from '@/assets/14';
import json15 from '@/assets/15';
import json16 from '@/assets/16';
import json17 from '@/assets/17';
import json18 from '@/assets/18';
import json19 from '@/assets/19';
const data = [
  json0,
  json1,
  json2,
  json3,
  json4,
  json5,
  json6,
  json7,
  json8,
  json9,
  json10,
  json11,
  json12,
  json13,
  json14,
  json15,
  json16,
  json17,
  json18,
  json19,
  // ...json0.assessments_list,
  // ...json1.assessments_list,
  // ...json2.assessments_list,
  // ...json3.assessments_list,
  // ...json4.assessments_list,
  // ...json5.assessments_list,
  // ...json6.assessments_list,
  // ...json7.assessments_list,
  // ...json8.assessments_list,
  // ...json9.assessments_list,
  // ...json10.assessments_list,
  // ...json11.assessments_list,
  // ...json12.assessments_list,
  // ...json13.assessments_list,
  // ...json14.assessments_list,
  // ...json15.assessments_list,
  // ...json16.assessments_list,
  // ...json17.assessments_list,
  // ...json18.assessments_list,
  // ...json19.assessments_list,
];
export default function IndexPage() {
  const [curData, setCurData] = useState([]);
  useEffect(() => {
    let arr: any = [];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].data && data[i].data.assessments_list) {
        arr = [
          ...arr,
          ...data[i].data.assessments_list.map((item: any) => {
            const { question_title, question_description, question_answer } =
              item;
            return { question_title, question_description, question_answer };
          }),
        ];
      }
    }
    setCurData(arr);
  }, []);

  const sortString = useCallback((answer, i) => {
    if (answer && answer[0] === '{') {
      console.log(JSON.parse(answer));
      const ans = JSON.parse(answer);
      if (ans[0].ops.length > 0) {
        let str = '';
        ans[0].ops.forEach((item: any) => {
          str += item.insert;
        });
        return str;
      }
    } else {
      return answer;
    }
    return '';
    // if (answer.) {}
  }, []);

  return (
    <div>
      {curData.length > 0 &&
        curData.map((item: any, i) => {
          return (
            <div>
              <h1 className={styles.title}>{item.question_title}</h1>
              <pre className={styles.desc}>{item.question_description}</pre>

              <pre className={styles.answer}>
                {sortString(item.question_answer, i)}
              </pre>
            </div>
          );
        })}
    </div>
  );
}
