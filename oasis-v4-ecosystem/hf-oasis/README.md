# 🤖 OASIS V4 AI/ML - HuggingFace Integration

AI dan Machine Learning integration untuk OASIS V4 menggunakan HuggingFace Inference API dan Spaces.

## 📁 Structure

```
hf-oasis/
├── models/              # Custom model definitions
├── training/            # Training scripts
├── inference/           # Inference endpoints
├── datasets/            # Training datasets
└── spaces/              # HuggingFace Spaces apps
```

## 🎯 AI Features

### DACOO AI
- **Goal Decomposition**: Break business goals into tasks
- **Content Generation**: Create digital asset content
- **Asset Optimization**: Optimize existing assets for revenue

### AEGM AI
- **Growth Prediction**: Forecast revenue and user growth
- **A/B Test Analysis**: Statistical significance testing
- **Journey Optimization**: Identify and fix bottlenecks

### OVS AI
- **Outcome Verification**: Validate business results
- **Attribution Modeling**: Multi-touch attribution calculation
- **ROI Analysis**: Automated ROI insights and recommendations

## 🚀 Quick Start

### Using HuggingFace Inference API

1. **Get API Token**:
   - Visit huggingface.co/settings/tokens
   - Create new token (Read access)
   - Copy token

2. **Set Environment Variable**:
   ```env
   NEXT_PUBLIC_HF_API_TOKEN=hf_xxx...
   ```

3. **Use in Code**:
   ```typescript
   import { oasisAI } from '@/lib/huggingface';
   
   const result = await oasisAI.dacoo.decomposeGoal(
     'Launch digital marketplace',
     10000
   );
   ```

### Deploy Custom Model Space

1. **Create Space**:
   - Go to huggingface.co/new-space
   - Name: `oasis-v4-models`
   - SDK: Gradio or Streamlit
   - Hardware: CPU (free) or GPU (paid)

2. **Upload Code**:
   - Upload `spaces/` folder contents
   - Space will auto-deploy

3. **Get Space URL**:
   - Copy Space URL
   - Add to environment variables

## 🔧 Available Models

### Text Generation
- **GPT-2**: Fast, general-purpose text generation
- **GPT-J**: Better quality, slower
- **BLOOM**: Multilingual support

### Specialized Models
- **Financial Forecasting**: Time series prediction
- **Text Classification**: Content categorization
- **Sentiment Analysis**: Customer feedback analysis
- **Named Entity Recognition**: Extract business entities

## 📊 Usage Examples

### Goal Decomposition
```typescript
const { data } = await oasisAI.dacoo.decomposeGoal(
  'Increase monthly revenue to $10,000',
  10000
);

console.log(data.tasks);
// [
//   { title: 'Market research', priority: 'high', estimatedTime: 4 },
//   { title: 'Product development', priority: 'high', estimatedTime: 8 },
//   ...
// ]
```

### Content Generation
```typescript
const { data } = await oasisAI.dacoo.generateAssetContent(
  'course',
  'AI Marketing Automation',
  'Digital marketers and business owners',
  'Focus on practical implementation'
);

console.log(data.title);        // "AI Marketing Automation Masterclass"
console.log(data.content);      // Full course outline
console.log(data.suggestedPrice); // 99
```

### Growth Analysis
```typescript
const metrics = [
  { date: '2025-01', revenue: 1000, users: 50, conversions: 10 },
  { date: '2025-02', revenue: 1500, users: 75, conversions: 15 },
  { date: '2025-03', revenue: 2200, users: 110, conversions: 22 },
];

const { data } = await oasisAI.aegm.analyzeGrowthTrends(metrics);

console.log(data.predictions.nextMonthRevenue); // 3200
console.log(data.trends.revenueGrowth);         // 45%
console.log(data.insights);                     // [...]
```

### ROI Analysis
```typescript
const { data } = await oasisAI.ovs.analyzeROI(
  { marketing: 5000, product: 3000, operations: 2000 },
  { product_sales: 15000, consulting: 8000 }
);

console.log(data.totalROI);                // 130%
console.log(data.breakdown);               // Category-wise ROI
console.log(data.recommendations);         // AI recommendations
```

## 🔑 API Rate Limits

### Free Tier
- **Inference API**: 30,000 characters/month
- **Rate**: ~1 request/second
- **Models**: All public models

### Pro Tier ($9/month)
- **Inference API**: Unlimited
- **Rate**: Higher limits
- **Priority**: Faster processing

## 🛠️ Custom Model Deployment

### Create Gradio App

```python
# app.py
import gradio as gr
from transformers import pipeline

# Load model
generator = pipeline('text-generation', model='gpt2')

def generate_tasks(goal_description, target_revenue):
    prompt = f"Decompose this goal: {goal_description}. Target: ${target_revenue}"
    result = generator(prompt, max_length=200)
    return result[0]['generated_text']

# Create interface
interface = gr.Interface(
    fn=generate_tasks,
    inputs=[
        gr.Textbox(label="Goal Description"),
        gr.Number(label="Target Revenue")
    ],
    outputs=gr.Textbox(label="Generated Tasks"),
    title="OASIS V4 - Goal Decomposition AI"
)

interface.launch()
```

### Deploy to Space

1. Create `requirements.txt`:
   ```
   gradio
   transformers
   torch
   ```

2. Upload files to Space
3. Space auto-deploys
4. Get API endpoint

## 📈 Performance

### Optimization Tips
1. **Use Smaller Models**: GPT-2 < GPT-J < GPT-3
2. **Cache Results**: Store AI outputs in database
3. **Batch Requests**: Process multiple items together
4. **Async Calls**: Don't block UI

### Response Times
- **GPT-2**: 1-3 seconds
- **GPT-J**: 5-10 seconds
- **Custom Models**: Varies

## 🔒 Security

### API Token Protection
- **Never expose in frontend**: Use environment variables
- **Use backend proxy**: Call HF from Edge Functions
- **Rotate regularly**: Generate new tokens periodically

### Rate Limiting
- Implement client-side throttling
- Add request queuing
- Monitor usage

## 🧪 Testing

### Test Inference API
```bash
curl https://api-inference.huggingface.co/models/gpt2 \
  -H "Authorization: Bearer hf_xxx..." \
  -H "Content-Type: application/json" \
  -d '{"inputs": "Test prompt"}'
```

### Test Custom Space
```bash
curl https://huggingface.co/spaces/username/space-name/api/predict \
  -H "Content-Type: application/json" \
  -d '{"data": ["input1", "input2"]}'
```

## 📚 Documentation

- **HuggingFace Docs**: huggingface.co/docs
- **Inference API**: huggingface.co/docs/api-inference
- **Spaces**: huggingface.co/docs/hub/spaces
- **Transformers**: huggingface.co/docs/transformers

## 🎓 Model Fine-Tuning

For advanced users, fine-tune models on your data:

1. Prepare dataset
2. Use HuggingFace Training API
3. Deploy fine-tuned model
4. Integrate with OASIS V4

## 📄 License

Proprietary - All rights reserved © 2025 OASIS V4

---

**Powered by HuggingFace 🤗**
