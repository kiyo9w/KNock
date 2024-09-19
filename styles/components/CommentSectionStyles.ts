// /Users/kiyo9w/knock/styles/components/CommentSectionStyles.ts

import { StyleSheet } from 'react-native';

export const CommentSectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  commentInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  commentList: {
    flex: 1,
  },
  commentItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  commentText: {
    fontSize: 14,
  },
  commentAuthor: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});
