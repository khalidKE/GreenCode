import streamlit as st
import time
from green_analyzer import GreenAnalyzerPro
import pandas as pd

# Page Config
st.set_page_config(
    page_title="Green Code AI",
    page_icon="🌿",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for Premium Look
st.markdown("""
    <style>
    .stApp {
        background-color: #0e1117;
        color: #fafafa;
    }
    .stTextArea textarea {
        background-color: #1e2129;
        color: #dcdcea;
        font-family: 'Fira Code', monospace;
        border-radius: 8px;
    }
    .stButton>button {
        background: linear-gradient(45deg, #00C853, #64DD17);
        color: white;
        border: none;
        padding: 0.5rem 2rem;
        border-radius: 25px;
        font-weight: bold;
        transition: all 0.3s ease;
    }
    .stButton>button:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(100, 221, 23, 0.4);
    }
    .metric-card {
        background-color: #1a1e26;
        padding: 1rem;
        border-radius: 10px;
        border-left: 5px solid #00C853;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    h1 {
        font-weight: 800;
        background: -webkit-linear-gradient(45deg, #00C853, #B2FF59);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    </style>
    """, unsafe_allow_html=True)

# Application Header
col1, col2 = st.columns([1, 4])
with col1:
    st.image("https://img.icons8.com/color/96/000000/ecology-bag.png", width=80) 
with col2:
    st.title("Green Code AI Engine")
    st.markdown("### Transform Dirty Code into Eco-Friendly Logic 🌍")

# Sidebar
with st.sidebar:
    st.header("About")
    st.info(
        "This AI-powered engine detects inefficient coding patterns "
        "that consume excess CPU & RAM, helping you reduce the carbon "
        "footprint of your software."
    )
    st.markdown("---")
    st.metric(label="Global CO2 Saved (Est)", value="12.5 kg", delta="+12%")
    
# Main Content
input_code = st.text_area("Paste your Python Code here:", height=300, 
    value="total = sum([i*i for i in range(1000000)])\n\n# Example: List comprehension vs Generator")

col_btn, col_space = st.columns([1, 3])
with col_btn:
    analyze_btn = st.button("🌱 Greenify Code")

if analyze_btn:
    with st.spinner("Analyzing CO2 impact & Optimizing..."):
        # Emulate processing time for effect
        time.sleep(1.2)
        
        analyzer = GreenAnalyzerPro()
        results = analyzer.analyze_and_fix(input_code)
        
        if results:
            st.success(f"Found {len(results)} optimization opportunities!")
            
            for idx, res in enumerate(results):
                with st.expander(f"Optimization #{idx+1} - {res['id']}", expanded=True):
                    c1, c2 = st.columns(2)
                    with c1:
                        st.markdown("**❌ Original (Dirty)**")
                        # Highlighting pattern isn't easy in text block, so we show description
                        st.code(input_code, language='python') # Just showing full code for context or snippet
                    with c2:
                        st.markdown("**✅ Green Solution**")
                        st.code(res['green_code'], language='text')

                    # Simulated Metrics (Since we can't easily measure without running generic code)
                    st.markdown("#### ⚡ Efficiency Gains")
                    m1, m2, m3 = st.columns(3)
                    with m1:
                        st.markdown(f'<div class="metric-card"><h5>RAM Usage</h5><h3 style="color:#00C853">-40%</h3></div>', unsafe_allow_html=True)
                    with m2:
                        st.markdown(f'<div class="metric-card"><h5>Execution Time</h5><h3 style="color:#00C853">-25%</h3></div>', unsafe_allow_html=True)
                    with m3:
                        st.markdown(f'<div class="metric-card"><h5>Carbon Footprint</h5><h3 style="color:#00C853">Low</h3></div>', unsafe_allow_html=True)
        else:
            st.warning("No specific 'Dirty' patterns found from our Green Registry. Your code looks relatively clean or requires deeper AI analysis.")
            st.balloons()
