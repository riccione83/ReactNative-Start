import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface Props {
  articles: string[];
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18
  },
  articlesDiv: {
    //borderBottom: "1px solid grey",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    //justifyItems: "center"
  },
  prevArticleText: {
    marginBottom: 40
  },
  articleText: {
    marginBottom: 10
  }
});

const Articles: React.FC<Props> = ({ articles }: Props) => {
  return (
    <View style={styles.articlesDiv}>
      <Text style={styles.title}>Older articles</Text>
      {articles.length > 0 ? (
        articles.map(article => {
          return (
            <Text key={article} style={styles.articleText}>
              {article}
            </Text>
          );
        })
      ) : (
        <Text style={styles.prevArticleText}>No previous articles</Text>
      )}
    </View>
  );
};

export default Articles;
