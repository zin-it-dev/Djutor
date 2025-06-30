def split_full_name(name: str) -> tuple[str, str]:
    parts = name.strip().split()
    first_name = parts[0]
    last_name = " ".join(parts[1:]) if len(parts) > 1 else ""
    
    return last_name, first_name