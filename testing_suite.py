import csv
import time
from green_analyzer import GreenAnalyzerPro

# 20 Examples of "Bad Code" to measure
examples = [
    {"id": "gen_exp", "code": "total = sum([i*i for i in range(10000)])"},
    {"id": "str_concat", "code": 's = ""\nfor i in range(1000): s += "a"'},
    {"id": "set_lookup", "code": "data = list(range(10000))\nif 9999 in data: pass"},
    {"id": "file_stream", "code": "with open('test.txt', 'w') as f: f.write('lines\\n'*5000)\ndata = open('test.txt').read()"},
    {"id": "nested_loops", "code": "A = range(200); B = range(200)\nfor x in A:\n for y in B: pass"},
    {"id": "busy_wait", "code": "import time\nt_end = time.time() + 0.01\nwhile time.time() < t_end: pass"},
    {"id": "map_filter", "code": "res = map(lambda x: x*2, range(10000))"},
    {"id": "global_vars", "code": "x = 0\ndef inc():\n global x; x+=1\nfor _ in range(10000): inc()"},
    {"id": "pandas_iter", "code": "import pandas as pd\ndf = pd.DataFrame({'a': range(1000)})\nfor i, row in df.iterrows(): pass"},
    {"id": "len_cache", "code": "arr = range(10000)\ni=0\nwhile i < len(arr): i+=1"},
    {"id": "enumerate_opt", "code": "arr = range(10000)\nfor i in range(len(arr)): val = arr[i]"},
    {"id": "dict_keys", "code": "d = {i:i for i in range(10000)}\nfor k in d.keys(): pass"},
    {"id": "huge_str_io", "code": "large = ''\nfor i in range(1000): large += str(i)"},
    {"id": "tuple_swap", "code": "a=1; b=2\nfor _ in range(10000): temp=a; a=b; b=temp"},
    {"id": "import_loop", "code": "for _ in range(1000): import math"},
    {"id": "while_one", "code": "i=0\nwhile 1:\n if i>10000: break\n i+=1"},
    {"id": "list_extend", "code": "l = []\nfor i in range(10000): l.append(i)"},
    {"id": "try_loop", "code": "for i in range(10000):\n try: x=1\n except: pass"},
    {"id": "math_pow", "code": "for i in range(10000): x = i ** 2"},
    {"id": "manual_gc", "code": "import gc\nfor _ in range(100): gc.disable()"}
]

analyzer = GreenAnalyzerPro()
csv_file = "green_code_metrics.csv"

# Pre-create test file for the file_stream test if needed or let the code handle it
# The code: with open('test.txt', 'w') as f: f.write('lines\n'*5000) handles it.

print("--- Starting Green Benchmarks ---")
with open(csv_file, mode='w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=["Example_ID", "Duration_sec", "Emissions_kg", "Green_Code_Fix"])
    writer.writeheader()
    for ex in examples:
        print(f"Testing {ex['id']}...")
        
        # Prepare execution wrapper
        def target_func():
            exec_globals = {}
            exec(ex["code"], exec_globals)
            
        metrics = analyzer.measure_efficiency(target_func)
        fix = analyzer.analyze_and_fix(ex["code"])
        
        writer.writerow({
            "Example_ID": ex["id"],
            "Duration_sec": metrics.get("duration_sec", "N/A"),
            "Emissions_kg": metrics.get("emissions_kg", 0),
            "Green_Code_Fix": fix[0]["green_code"] if fix else "N/A"
        })

print(f"✅ Success! Send me the file: {csv_file}")
