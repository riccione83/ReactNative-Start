import React, { useState } from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { addArticle, getArticles } from "./modules";
import Articles from "./component/Articles";
import DismissKeyboard from "../components/KeyboardDismiss";

const HomeComponent: React.FC = () => {
  const dispatch = useDispatch();

  const add = str => dispatch(addArticle(str));
  const art = useSelector(getArticles);

  const [newArticle, setNewArticle] = useState<string | undefined>("");

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Articles articles={art} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Insert a new article"}
            onChangeText={text => setNewArticle(text)}
            value={newArticle}
          />
        </View>
        <Button
          title="ADD"
          onPress={() => {
            newArticle && add(newArticle);
            setNewArticle(undefined);
          }}
        ></Button>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    marginBottom: 20,
    borderColor: "#00CCFF"
  },
  input: {
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
    minWidth: 200
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const HomeScreen = connect()(HomeComponent);
export default HomeScreen;
