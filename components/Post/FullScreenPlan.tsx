import React, { useContext, useState, useRef } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, TextInput, Animated, Dimensions } from 'react-native';
import { Plan } from '@/types/PlanTypes';
import { Comment } from '@/types/CommentTypes';
import { Ionicons } from '@expo/vector-icons';
import { DailyPlanContext } from '@/context/DailyPlanContext';
import PlanDropDown from '@/components/PlanDropDown';
import { postFullScreenStyles, getRandomPastelColor } from '@/styles/components/PostFullScreenStyles';
import { CommentSectionStyles } from '@/styles/components/CommentSectionStyles';

interface FullScreenPlanProps {
  plan: Plan;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

// Dummy comments
const dummyComments: Comment[] = [
  {
    id: '1',
    text: 'This plan looks great! Im excited to try it out.',
    author: 'John Doe',
    createdAt: new Date('2023-05-10T10:00:00'),
  },
  {
    id: '2',
    text: 'Ive been following a similar routine and its been really helpful.',
    author: 'Jane Smith',
    createdAt: new Date('2023-05-11T14:30:00'),
  },
  {
    id: '3',
    text: 'Could you provide more details about the meditation part?',
    author: 'Mike Johnson',
    createdAt: new Date('2023-05-12T09:15:00'),
  },
  {
    id: '4',
    text: 'I love how this plan balances different activities throughout the day.',
    author: 'Emily Brown',
    createdAt: new Date('2023-05-13T16:45:00'),
  },
];

const FullScreenPlan: React.FC<FullScreenPlanProps> = ({ plan }) => {
  const { showDailyPlan, toggleDailyPlan } = useContext(DailyPlanContext);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>(dummyComments);
  const scrollY = useRef(new Animated.Value(0)).current as Animated.Value;

  const backgroundStyle = plan.backgroundImage
    ? { uri: plan.backgroundImage }
    : { backgroundColor: getRandomPastelColor() };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        text: newComment,
        author: 'Current User',
        createdAt: new Date(),
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <View style={postFullScreenStyles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <ImageBackground source={backgroundStyle} style={[postFullScreenStyles.background, { height: SCREEN_HEIGHT }]}>
          <View style={postFullScreenStyles.overlay}>
            <Text style={postFullScreenStyles.title}>{plan.title}</Text>
            <Text style={postFullScreenStyles.time}>{`${plan.startTime} - ${plan.endTime}`}</Text>
          </View>
        </ImageBackground>
        
        <View style={CommentSectionStyles.container}>
          <TextInput
            value={newComment}
            onChangeText={setNewComment}
            placeholder="Add a comment..."
            style={CommentSectionStyles.commentInput}
            onSubmitEditing={handleAddComment}
          />
            {comments.map((item) => (
              <View key={item.id} style={CommentSectionStyles.commentItem}>
                <Text style={CommentSectionStyles.commentText}>{item.text}</Text>
                <Text style={CommentSectionStyles.commentAuthor}>
                  {item.author} • {item.createdAt.toLocaleDateString()}
                </Text>
              </View>
            ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={postFullScreenStyles.addButton} onPress={toggleDailyPlan}>
        <Ionicons name="add-circle" size={32} color="white" />
        <Text style={postFullScreenStyles.buttonText}>Add Activity</Text>
      </TouchableOpacity>
      {showDailyPlan && <PlanDropDown />}
    </View>
  );
};

export default FullScreenPlan;
