import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';

const sampleData = {
  "data": [
    {
      "name": "Application",//1
      "child": [
        {
          "name": "Calendar", // 1 1
          "child": [
            {
              "name": "Year",
              "child": []
            },
            {
              "name": "Month",
              "child": [
                {
                  "name": "month1.js",
                  "child": []
                },
                {
                  "name": "month2.js",
                  "child": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Documents",
      "child": [
        {
          "name": "OSS",
          "child": []
        },
        {
          "name": "MIUI",
          "child": [
            {
              "name": "Index.js",
              "child": []
            }
          ]
        }
      ]
    }
  ]
}

function App() {

  const AccordionRecursion = ({ item, index }) => {
    // console.log("ChildAccordion:", item);

    const getPadding = (e) => {
      console.log("e:", e);
    }
    const handleClick = (e) => {
      // console.log("e:", e.target)
    }
    return (
      <>
        {
          item.map((d, i) => (
            // <div>
            <Accordion name={d.name}
              showArrow={d?.child?.length > 0}
            // leftPadding={20 * ((i + 1))}
            // leftPadding={() => getPadding()}
            // isChild={true}
            >
              {d?.child?.length > 0 && (
                <div className='accordion_recursion' style={{ display: 'none' }}>
                  <AccordionRecursion item={d.child} index={i + 1} />
                </div>
              )}
            </Accordion>

            // </div>
          ))
        }
      </>
    )
  }

  return (
    <div className="App">
      <div className='accordion_container'>

        {
          sampleData.data.map((item, index) => (
            <div>
              {/* <AccordionRecursion item={item} /> */}
              <Accordion name={item.name} showArrow={item?.child?.length > 0} >
                {item?.child?.length > 0 && (
                  <div className='accordion_recursion' style={{ display: 'none' }}>
                    <AccordionRecursion item={item.child} index={index + 1} />
                  </div>
                )}
              </Accordion>

            </div>

          ))
        }
      </div>
    </div>
  );
}

export default App;
