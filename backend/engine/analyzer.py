import ast

# Rough estimation values (extendable with real profiling)
CPU_COST_PER_OP = 0.00002  # Wh per operation
CO2_PER_WH = 0.475  # grams (global avg)

DIRTY_PATTERNS = {
    'for_range_len': 'Use direct iteration instead of range(len(x))',
    'list_append_loop': 'Use list comprehensions instead of append in loops'
}


def analyze_code(code: str):
    try:
        tree = ast.parse(code)
    except SyntaxError as e:
        return {
            'error': f'Syntax error in code: {str(e)}',
            'energy': 0,
            'co2': 0,
            'score': 0,
            'suggestions': ['Please fix syntax errors before analysis']
        }

    operations = 0
    suggestions = []

    for node in ast.walk(tree):
        if isinstance(node, (ast.For, ast.While)):
            operations += 500
            suggestions.append('Consider minimizing loops or using vectorized operations (e.g., NumPy)')

        if isinstance(node, ast.Call):
            operations += 50
            # Check for range(len())
            if isinstance(node.func, ast.Name) and node.func.id == 'range':
                if len(node.args) == 1 and isinstance(node.args[0], ast.Call):
                    if isinstance(node.args[0].func, ast.Name) and node.args[0].func.id == 'len':
                        suggestions.append(DIRTY_PATTERNS['for_range_len'])

        if isinstance(node, ast.ListComp):
            operations += 200 # Comprehensions are generally more efficient but still take work
        
        # Detect nested loops
        if isinstance(node, (ast.For, ast.While)):
            for child in ast.walk(node):
                if child != node and isinstance(child, (ast.For, ast.While)):
                    suggestions.append('Detected nested loops. This can exponentially increase energy consumption.')

    energy = round(operations * CPU_COST_PER_OP, 4)
    co2 = round(energy * CO2_PER_WH, 4)

    score = max(100 - int(operations / 50), 30)

    return {
        'energy': energy,
        'co2': co2,
        'score': score,
        'suggestions': list(set(suggestions))
    }
