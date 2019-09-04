---
title: "Excel Catch"
date: 2019-08-09T10:18:04-07:00
draft: false
menu:
  docs:
    title: "Excel Catch"
    parent: "Data Analytics"
    name: "Excel"
---

## Reference 

### Spot Check Data 

Create new column with ``` =RANDOM ```




##### Remove Columns with 1 or less cells

```VB

Public Sub DeleteEmptyColumns()
  Dim SourceRange As Range
  Dim EntireColumn As Range
 
  On Error Resume Next
 
  Set SourceRange = Application.InputBox( _
    "Select a range:", "Delete Empty Columns", _
    Application.Selection.Address, Type:=8)
 
  If Not (SourceRange Is Nothing) Then
    Application.ScreenUpdating = False
 
    For i = SourceRange.Columns.Count To 1 Step -1
      Set EntireColumn = SourceRange.Cells(1, i).EntireColumn
      If Application.WorksheetFunction.CountA(EntireColumn) <= 1 Then
        EntireColumn.Delete
      End If
    Next
 
    Application.ScreenUpdating = True
  End If
End Sub

```
