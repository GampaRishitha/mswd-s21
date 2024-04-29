// FeedbackComponent.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';


const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const containerStyle = {
    textAlign: 'center',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
  };
  const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    resize: 'vertical',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    boxSizing: 'border-box',
  };

  const disabledButtonStyle = {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  };

  const submissionMessageStyle = {
    textAlign: 'center',
    marginTop: '10px',
    color: '#0b0e0e',
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    if (feedback.trim() !== '') {
      // Simulate sending feedback to the server
      setSubmitting(true);

      fetch('http://localhost:8080/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      })
        .then((response) => response.json())
        .then((data) => {
          setSubmissionMessage(`Feedback submitted successfully`);
        })
        .catch((error) => {
          setSubmissionMessage(`Error submitting feedback`);
        })
        .finally(() => {
          setSubmitting(false);
        });

      // Clear the feedback input
      setFeedback('');
    }
  };
  const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
    },
  }));
  
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  return (
    <div style={containerStyle}>
        <div className="feedback-parent">
        <div id="lp" className="feedback-page"  style={{boxShadow: "5px 5px 7px black"}}>
            <p><b><i style={{textShadow: "1px 2px 5px yellow, -1px -2px 3px white"}}>Feedback Page</i></b></p>
      <textarea
        value={feedback}
        onChange={handleFeedbackChange}
        placeholder="Enter your feedback"
        disabled={submitting}
        style={textareaStyle}
      />
        <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
      <button
        onClick={handleSubmit}
        disabled={submitting}
        style={submitting ? { ...buttonStyle, ...disabledButtonStyle } : buttonStyle}
      >
        {submitting ? 'Submitting...' : 'Submit Feedback'}
      </button>
      {submissionMessage && <p style={submissionMessageStyle}>{submissionMessage}</p>}
    </div>
    </div>
    </div>
  );
};

export default FeedbackComponent;
