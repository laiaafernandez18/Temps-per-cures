export default function App(props) {
  const {
    iframeSource = '<iframe src="https://book.timify.com?accountId=633bd418aa97e532ebc85e66&fullscreen=1&hideCloseButton=1&locale=es-es"></iframe>'
  } = props;
  return <div className="App" dangerouslySetInnerHTML={{__html: iframeSource}}></div>;
}