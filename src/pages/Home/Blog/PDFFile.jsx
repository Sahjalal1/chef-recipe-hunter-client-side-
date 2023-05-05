import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Text style={styles.title}>1. Tell us the differences between uncontrolled and controlled components??</Text>
        <Text style={styles.text}> ****Ans**==
        In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
        </Text>

        <Text style={styles.title}>2. How to validate React props using PropTypes??</Text>
        <Text style={styles.text}>****Ans**==
        1. PropTypes.any : The prop can be of any data type.applications. In other words, NodeJS is..... 2. PropTypes.bool : The prop should be a Boolean...... 3. PropTypes.bool : The prop should be a Boolean...... 4. PropTypes.string : The prop should be a string..... 5. PropTypes.func : The prop should be a function.....  6. PropTypes.array : The prop should be an array.....
        </Text>
        <Text style={styles.title}>3. Tell us the difference between nodejs and express js.??</Text>
        <Text style={styles.text}>****Ans**==
        js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
        </Text>
        <Text style={styles.title}>4. What is a custom hook, and why will you create a custom hook???</Text>
        <Text style={styles.text}>****Ans**==
        Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
