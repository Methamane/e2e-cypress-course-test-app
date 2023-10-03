from nicegui import ui


## Binding Values ##
""" Example 2 """
previous_input = ""
example_2_vals = {"label": "You have 15 characters left.", "input": ""}
""" Example 3 """
example_3_vals = {
    "label1": "You have 15 characters left.",
    "input1": "",
    "label2": "You have 15 characters left.",
    "input2": "",
}
example_4_vals = {
    "current_label": "No items selected",
    "checkbox1": False,
    "checkbox2": False,
    "checkbox3": False,
    "checkbox_label": "0 checkboxes",
}


## Functions ##
def on_input_change():
    global previous_input
    global example_2_vals

    if example_2_vals.get("input") is None:
        return
    if len(example_2_vals["input"]) >= 16:
        example_2_vals["input"] = previous_input
    else:
        previous_input = example_2_vals["input"]
    example_2_vals["label"] = f"You have {15 - len(previous_input)%16} characters left."


def on_input_change_e3(input_str: str):
    global example_3_vals

    if input_str == "input1":
        if len(example_3_vals["input1"]) >= 16:
            example_3_vals["input1"] = example_3_vals["input1"][:15]
        example_3_vals[
            "label1"
        ] = f"You have {15 - len(example_3_vals['input1'])%16} characters left."
    elif input_str == "input2":
        if len(example_3_vals["input2"]) >= 16:
            example_3_vals["input2"] = example_3_vals["input2"][:15]
        example_3_vals[
            "label2"
        ] = f"You have {15 - len(example_3_vals['input2'])%16} characters left."


def on_box1_item_double_click(clicked: str):
    global example_4_vals
    example_4_vals["current_label"] = clicked


def checkbox_changed():
    global example_4_vals
    count = 0
    if example_4_vals["checkbox1"]:
        count += 1
    if example_4_vals["checkbox2"]:
        count += 1
    if example_4_vals["checkbox3"]:
        count += 1
    example_4_vals["checkbox_label"] = f"{count} checkboxes"


## Pages ##
@ui.page("/example-1")
def example_1():
    ui.add_body_html("<h1> My Awesome Web Application </h1>")


@ui.page("/example-2")
def example_2():
    with ui.column():
        ui.input(on_change=on_input_change).style("width: 200px;").bind_value(
            example_2_vals, "input"
        )
        ui.label().bind_text(example_2_vals, "label")


@ui.page("/example-3")
def example_3():
    with ui.column():
        ui.input(on_change=lambda: on_input_change_e3("input1")).style(
            "width: 200px;"
        ).bind_value(example_3_vals, "input1").props("data-cy=input1")
        ui.label().bind_text(example_3_vals, "label1").props("data-cy=label1")
        ui.input(on_change=lambda: on_input_change_e3("input2")).style(
            "width: 200px;"
        ).bind_value(example_3_vals, "input2").props("data-cy=input2")
        ui.label().bind_text(example_3_vals, "label2").props("data-cy=label2")


@ui.page("/example-4")
def example_4():
    ui.label("Items list").style("font-size:2rem;")
    ui.label().props("data-cy=box-1-current-item").bind_text(
        example_4_vals, "current_label"
    )
    with ui.column().props("data-cy=box-1-items-list"):
        ui.label("Item0").props("data-cy=box-1-item-0").on(
            "dblclick", lambda: on_box1_item_double_click("Option Zero")
        )
        ui.label("Item1").props("data-cy=box-1-item-1").on(
            "dblclick", lambda: on_box1_item_double_click("Option One")
        )
        ui.label("Item2").props("data-cy=box-1-item-2").on(
            "dblclick", lambda: on_box1_item_double_click("Option Two")
        )
    ui.separator()
    ui.label("Checkboxes").style("font-size:2rem;")
    with ui.column():
        ui.label().bind_text(example_4_vals, "checkbox_label").props(
            "data-cy=checkbox-label"
        )
        ui.checkbox(text="Checkbox1", on_change=checkbox_changed).props(
            "data-cy=checkbox1"
        ).bind_value(example_4_vals, "checkbox1")
        ui.checkbox(text="Checkbox2", on_change=checkbox_changed).props(
            "data-cy=checkbox2"
        ).bind_value(example_4_vals, "checkbox2")
        ui.checkbox(text="Checkbox3", on_change=checkbox_changed).props(
            "data-cy=checkbox3"
        ).bind_value(example_4_vals, "checkbox3")
    ui.separator()
    ui.label("Select")
    with ui.column():
        select_label = ui.label("").props("data-cy=select-label")
        ui.select(
            options=["Option 1", "Option 2", "Option 3"],
            on_change=lambda e: select_label.set_text(str(e.value)),
        ).style("width:200px;").props("data-cy=select")
    ui.separator()
    ui.label("Hover")
    with ui.column():
        hover_label = ui.label("No option").props("data-cy=hover-label")
        ui.label("Option 1").on(
            "mouseover", lambda: hover_label.set_text("Option 1")
        ).props("data-cy=hover-1")
        ui.label("Option 2").on(
            "mouseover", lambda: hover_label.set_text("Option 2")
        ).props("data-cy=hover-2")
        ui.label("Option 3").on(
            "mouseover", lambda: hover_label.set_text("Option 3")
        ).props("data-cy=hover-3")


with ui.column().classes("items-center").style("width: 100%;"):
    ui.button(text="Example 1", on_click=lambda: ui.open("/example-1"))
    ui.button(text="Example 2", on_click=lambda: ui.open("/example-2"))
    ui.button(text="Example 3", on_click=lambda: ui.open("/example-3"))
    ui.button(text="Example 4", on_click=lambda: ui.open("/example-4"))

ui.run(title="nicegui e2e testing", port=3030, dark=True)
