# EXCEPTIONS

try:
    a = int(input('Enter number 1: '))
    b = int(input('Enter number 2: '))
    print('sum', a+b)
except ValueError:
    print('enter a number')
except:
    print('something went wrong')

# NO EXCEPTION HANDLING

c = int(input('Enter number 1: '))
d = int(input('Enter number 2: '))
print('sum', c+d)

'''
Traceback (most recent call last):
  File "exceptions.py", line 11, in <module>
    c = int(input('Enter number 1: '))
ValueError: invalid literal for int() with base 10: 's'
Error in sys.excepthook:
Traceback (most recent call last):
  File "/usr/lib/python3/dist-packages/apport_python_hook.py", line 63, in apport_excepthook
    from apport.fileutils import likely_packaged, get_recent_crashes
  File "/usr/lib/python3/dist-packages/apport/__init__.py", line 5, in <module>
    from apport.report import Report
  File "/usr/lib/python3/dist-packages/apport/report.py", line 30, in <module>
    import apport.fileutils
  File "/usr/lib/python3/dist-packages/apport/fileutils.py", line 23, in <module>
    from apport.packaging_impl import impl as packaging
  File "/usr/lib/python3/dist-packages/apport/packaging_impl.py", line 24, in <module>
    import apt
  File "/usr/lib/python3/dist-packages/apt/__init__.py", line 23, in <module>
    import apt_pkg
ModuleNotFoundError: No module named 'apt_pkg'

Original exception was:
Traceback (most recent call last):
  File "exceptions.py", line 11, in <module>
    c = int(input('Enter number 1: '))
ValueError: invalid literal for int() with base 10: 's'
'''
