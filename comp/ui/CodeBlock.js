import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
// import github from "prism-react-renderer/themes/duotoneLight"

const CodeBlock = ({ children, className, ...props}) => {
  //console.log({children,className,...props});
  const language = className ? className.replace(/language-/, "") : "javascript"
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
    //theme={github}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={className}>
          {tokens.map((line, i) => {
            // console.log(getLineProps({ line, key: i }))
            let { className } = getLineProps({ line, key: i })
            return <div key={i} className={className}>
              {line.map((token, key) => {
                // console.log(getTokenProps({ token, key }))
                let { className, children } = getTokenProps({ token, key })
                return <span key={key} className={className}>{children}</span>
              })}
            </div>
          })}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
